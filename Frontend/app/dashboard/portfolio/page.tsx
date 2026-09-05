import { Badge } from "@/app/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import { ArrowDownRight, ArrowUpRight, PieChart } from "lucide-react"

const holdings = [
  { asset: "Bitcoin", symbol: "BTC", amount: "0.84", value: "$54,620.40", allocation: "44%", change: "+3.8%" },
  { asset: "Ethereum", symbol: "ETH", amount: "8.10", value: "$29,808.00", allocation: "24%", change: "+2.1%" },
  { asset: "Solana", symbol: "SOL", amount: "155.00", value: "$21,545.00", allocation: "17%", change: "-1.4%" },
  { asset: "Cash", symbol: "USD", amount: "18,420.00", value: "$18,420.00", allocation: "15%", change: "+0.0%" },
]

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Portfolio</h2>
        <p className="mt-1 text-sm text-[#00FF00]/70">Track allocations, holdings, and daily performance.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-black border border-[#00FF00]/30">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-white">Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#00FF00]">$124,393.40</p>
            <p className="mt-1 flex items-center text-sm text-white">
              <ArrowUpRight className="mr-1 h-4 w-4 text-[#00FF00]" />
              +2.7% today
            </p>
          </CardContent>
        </Card>
        <Card className="bg-black border border-[#00FF00]/30">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-white">Open Positions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#00FF00]">12</p>
            <p className="mt-1 text-sm text-[#00FF00]/70">Across crypto and equities</p>
          </CardContent>
        </Card>
        <Card className="bg-black border border-[#00FF00]/30">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-white">Risk Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#00FF00]">Moderate</p>
            <p className="mt-1 text-sm text-[#00FF00]/70">Balanced concentration</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-black border border-[#00FF00]/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <PieChart className="h-5 w-5 text-[#00FF00]" />
            Holdings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-[#00FF00]/20 hover:bg-transparent">
                <TableHead className="text-[#00FF00]/70">Asset</TableHead>
                <TableHead className="text-[#00FF00]/70">Amount</TableHead>
                <TableHead className="text-[#00FF00]/70">Value</TableHead>
                <TableHead className="text-[#00FF00]/70">Allocation</TableHead>
                <TableHead className="text-right text-[#00FF00]/70">24h</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {holdings.map((holding) => {
                const isPositive = !holding.change.startsWith("-")

                return (
                  <TableRow key={holding.symbol} className="border-[#00FF00]/20 hover:bg-[#00FF00]/5">
                    <TableCell>
                      <div>
                        <p className="font-medium text-white">{holding.asset}</p>
                        <p className="text-sm text-[#00FF00]/70">{holding.symbol}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-white">{holding.amount}</TableCell>
                    <TableCell className="text-white">{holding.value}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="border-[#00FF00]/40 text-[#00FF00]">
                        {holding.allocation}
                      </Badge>
                    </TableCell>
                    <TableCell className={`text-right ${isPositive ? "text-[#00FF00]" : "text-red-400"}`}>
                      <span className="inline-flex items-center justify-end gap-1">
                        {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                        {holding.change}
                      </span>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
