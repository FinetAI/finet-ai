import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { ArrowDownToLine, ArrowUpFromLine, Copy, Wallet } from "lucide-react"

const balances = [
  { asset: "USD Balance", value: "$18,420.00" },
  { asset: "Crypto Balance", value: "$87,553.40" },
  { asset: "Available Margin", value: "$12,800.00" },
]

const wallets = [
  { network: "Ethereum", address: "0x71C7...A92f", status: "Connected" },
  { network: "Bitcoin", address: "bc1q8...9x2m", status: "Connected" },
  { network: "Solana", address: "7Vf3...Qp91", status: "Connected" },
]

export default function WalletPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Wallet</h2>
        <p className="mt-1 text-sm text-[#00FF00]/70">Manage balances, funding, and connected wallets.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {balances.map((balance) => (
          <Card key={balance.asset} className="bg-black border border-[#00FF00]/30">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-white">{balance.asset}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-[#00FF00]">{balance.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-black border border-[#00FF00]/30">
        <CardContent className="grid gap-4 p-6 md:grid-cols-3">
          <Button className="bg-[#00FF00] text-black hover:bg-[#00FF00]/90">
            <ArrowDownToLine className="mr-2 h-4 w-4" />
            Deposit
          </Button>
          <Button variant="outline" className="border-[#00FF00]/40 bg-black text-[#00FF00] hover:bg-[#00FF00]/10">
            <ArrowUpFromLine className="mr-2 h-4 w-4" />
            Withdraw
          </Button>
          <Button variant="outline" className="border-[#00FF00]/40 bg-black text-[#00FF00] hover:bg-[#00FF00]/10">
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-black border border-[#00FF00]/30">
        <CardHeader>
          <CardTitle className="text-white">Connected Wallets</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {wallets.map((wallet) => (
            <div
              key={wallet.network}
              className="flex flex-col gap-3 rounded-lg border border-[#00FF00]/20 bg-[#0A0A0A] p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium text-white">{wallet.network}</p>
                <p className="text-sm text-[#00FF00]/70">{wallet.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#00FF00]">{wallet.status}</span>
                <Button size="icon" variant="ghost" className="text-[#00FF00] hover:bg-[#00FF00]/10 hover:text-[#00FF00]">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
