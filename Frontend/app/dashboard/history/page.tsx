import { Badge } from "@/app/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import { History } from "lucide-react"

const trades = [
  { id: "TRD-8721", asset: "BTC", side: "Buy", size: "$8,500", price: "$64,940", date: "Sep 5, 2026", status: "Filled" },
  { id: "TRD-8718", asset: "ETH", side: "Sell", size: "$4,200", price: "$3,680", date: "Sep 4, 2026", status: "Filled" },
  { id: "TRD-8709", asset: "SOL", side: "Buy", size: "$2,750", price: "$139", date: "Sep 3, 2026", status: "Filled" },
  { id: "TRD-8695", asset: "AAPL", side: "Buy", size: "$6,100", price: "$229", date: "Sep 2, 2026", status: "Filled" },
]

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Trade History</h2>
        <p className="mt-1 text-sm text-[#00FF00]/70">Review recent orders and execution details.</p>
      </div>

      <Card className="bg-black border border-[#00FF00]/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <History className="h-5 w-5 text-[#00FF00]" />
            Recent Trades
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-[#00FF00]/20 hover:bg-transparent">
                <TableHead className="text-[#00FF00]/70">Trade ID</TableHead>
                <TableHead className="text-[#00FF00]/70">Asset</TableHead>
                <TableHead className="text-[#00FF00]/70">Side</TableHead>
                <TableHead className="text-[#00FF00]/70">Size</TableHead>
                <TableHead className="text-[#00FF00]/70">Price</TableHead>
                <TableHead className="text-[#00FF00]/70">Date</TableHead>
                <TableHead className="text-right text-[#00FF00]/70">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trades.map((trade) => (
                <TableRow key={trade.id} className="border-[#00FF00]/20 hover:bg-[#00FF00]/5">
                  <TableCell className="font-medium text-white">{trade.id}</TableCell>
                  <TableCell className="text-white">{trade.asset}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        trade.side === "Buy"
                          ? "border-[#00FF00]/40 text-[#00FF00]"
                          : "border-red-400/40 text-red-400"
                      }
                    >
                      {trade.side}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-white">{trade.size}</TableCell>
                  <TableCell className="text-white">{trade.price}</TableCell>
                  <TableCell className="text-white">{trade.date}</TableCell>
                  <TableCell className="text-right">
                    <Badge className="bg-[#00FF00] text-black hover:bg-[#00FF00]/90">{trade.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
