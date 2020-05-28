<template>
  <v-container class="mt-4">
    <v-row>
      <v-col cols="6" class="text-center">
        <v-card>
          <v-card-text>
            <div v-if="connected">
              <v-item-group>
                <v-btn
                  color="green"
                  :disabled="isStarted"
                  outlined
                  @click="startSession"
                >
                  Start
                  <v-icon color="green">
                    mdi-play
                  </v-icon>
                </v-btn>
                <v-btn
                  color="red"
                  outlined
                  :disabled="!isStarted"
                  @click="stopSession"
                >
                  Stop
                  <v-icon color="red">
                    mdi-stop
                  </v-icon>
                </v-btn>
                <v-btn
                  color="orange"
                  outlined
                  @click="clearData"
                >
                  Reset
                  <v-icon color="orange">
                    mdi-restart
                  </v-icon>
                </v-btn>
              </v-item-group>
            </div>
            <div v-if="!connected">
              <v-alert type="error">
                {{ disconnectedText }}
              </v-alert>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" class="text-center">
        <v-card>
          <v-card-text>
            <div class="headline mb-1">
              Amount: <span v-text="amount.toFixed(8)" /> <v-icon color="rgba(255,255,255, 0.7)" class="atl-amount-icon">
                mdi-currency-btc
              </v-icon>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-simple-table
            dense
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="atl-table-th">
                    From
                  </th>
                  <th class="atl-table-th">
                    To
                  </th>
                  <th class="atl-table-th">
                    Sum
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="tx in transactions" :key="tx._id">
                  <td class="atl-table-td">
                    <div v-for="(addr,index) in tx.from" :key="'fr'+index">
                      {{ addr }}
                    </div>
                  </td>
                  <td class="atl-table-td">
                    <div v-for="(addr,index) in tx.to" :key="'to'+index">
                      {{ addr }}
                    </div>
                  </td>
                  <td class="atl-table-td">
                    {{ tx.sum }} BTC
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    connected: false,
    disconnectedText: 'Disconnected',
    isStarted: false,
    url: 'wss://ws.blockchain.info/inv',
    connection: null,
    amount: 0,
    transactions: []
  }),
  created () {
    this.connection = new WebSocket(this.url)
    this.connection.onopen = () => {
      this.connected = true
    }
    this.connection.onerror = (error) => {
      this.connected = false
      this.disconnectedText = `WebSocket error: ${error}`
    }
  },
  methods: {
    startSession () {
      this.isStarted = true
      this.connection.send('{"op":"unconfirmed_sub"}')
      let id = this.transactions.length
      this.connection.onmessage = (e) => {
        const msgData = JSON.parse(e.data)
        if (msgData.op === 'utx') {
          const outputs = msgData.x.out
          let totalTxValue = 0
          const outAddr = []
          for (let j = 0; j < outputs.length; j++) {
            const output = outputs[j]
            outAddr.push(output.addr)
            totalTxValue += output.value
          }
          totalTxValue /= 100000000
          this.amount += totalTxValue

          const inputs = msgData.x.inputs
          const inAddr = []
          for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i].prev_out
            inAddr.push(input.addr)
          }
          this.transactions.unshift({
            _id: id++,
            from: inAddr,
            to: outAddr,
            sum: totalTxValue
          })
        }
      }
    },
    stopSession () {
      this.connection.send('{"op":"unconfirmed_unsub"}')
      this.isStarted = false
    },
    clearData () {
      this.amount = 0
      this.transactions = []
    }
  },
  head () {
    return {
      title: 'Blockchain'
    }
  }
}
</script>

<style>
.atl-amount-icon {
    position: relative;
    top: -2px;
    left: -5px;
}
.atl-table-th {
    color: #ec8e02!important;
    font-size: 0.9rem!important;
}
.atl-table-td {
    text-align: left;
    width: 30%;
    font-weight: 100;
    font-size: 0.8rem !important;
}
</style>
