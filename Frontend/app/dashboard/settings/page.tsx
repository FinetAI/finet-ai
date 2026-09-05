import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Switch } from "@/app/components/ui/switch"
import { Bell, Brain, Globe, Shield } from "lucide-react"

const settingsGroups = [
  {
    icon: Bell,
    title: "Notifications",
    items: [
      { label: "Price alerts", description: "Send alerts when watched assets cross target prices.", enabled: true },
      { label: "Prediction updates", description: "Notify when new AI signals are available.", enabled: true },
      { label: "Weekly summary", description: "Receive a weekly performance recap.", enabled: false },
    ],
  },
  {
    icon: Brain,
    title: "AI Preferences",
    items: [
      { label: "High confidence only", description: "Show signals above the selected confidence level.", enabled: true },
      { label: "Explain predictions", description: "Include model rationale with prediction cards.", enabled: true },
    ],
  },
  {
    icon: Shield,
    title: "Privacy",
    items: [
      { label: "Mask balances", description: "Hide balances until you reveal them.", enabled: false },
      { label: "Secure sessions", description: "Require re-authentication for sensitive actions.", enabled: true },
    ],
  },
]

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Settings</h2>
        <p className="mt-1 text-sm text-[#00FF00]/70">Manage alerts, AI behavior, and account protection.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {settingsGroups.map((group) => {
          const Icon = group.icon

          return (
            <Card key={group.title} className="bg-black border border-[#00FF00]/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Icon className="h-5 w-5 text-[#00FF00]" />
                  {group.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start justify-between gap-4 rounded-lg border border-[#00FF00]/20 bg-[#0A0A0A] p-4"
                  >
                    <div>
                      <p className="font-medium text-white">{item.label}</p>
                      <p className="mt-1 text-sm text-[#00FF00]/70">{item.description}</p>
                    </div>
                    <Switch defaultChecked={item.enabled} className="data-[state=checked]:bg-[#00FF00]" />
                  </div>
                ))}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="bg-black border border-[#00FF00]/30">
        <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-[#00FF00]" />
            <div>
              <p className="font-medium text-white">Region and currency</p>
              <p className="text-sm text-[#00FF00]/70">United States, USD</p>
            </div>
          </div>
          <Button className="bg-[#00FF00] text-black hover:bg-[#00FF00]/90">Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  )
}
