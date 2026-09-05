import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Bell, CheckCircle2, Lock, Mail, Shield, User } from "lucide-react"

const accountDetails = [
  { label: "Full name", value: "John Doe" },
  { label: "Email", value: "john.doe@example.com" },
  { label: "Plan", value: "Pro Trader" },
  { label: "Member since", value: "Jan 2026" },
]

const preferences = [
  { icon: Bell, title: "Market alerts", description: "Price and volatility notifications are enabled." },
  { icon: Mail, title: "Email summaries", description: "Daily portfolio summaries arrive every morning." },
  { icon: Shield, title: "Risk controls", description: "AI trade confidence threshold is set to high." },
]

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <Card className="bg-black border border-[#00FF00]/30">
        <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border border-[#00FF00]/30">
              <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
              <AvatarFallback className="bg-muted text-2xl text-[#00FF00]">JD</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <div>
                <h2 className="text-2xl font-bold text-white">John Doe</h2>
                <p className="text-sm text-[#00FF00]/70">john.doe@example.com</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#00FF00] text-black hover:bg-[#00FF00]/90">Verified</Badge>
                <Badge variant="outline" className="border-[#00FF00]/40 text-[#00FF00]">
                  Pro Trader
                </Badge>
              </div>
            </div>
          </div>
          <Button className="bg-[#00FF00] text-black hover:bg-[#00FF00]/90">Edit Profile</Button>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="bg-black border border-[#00FF00]/30 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <User className="h-5 w-5 text-[#00FF00]" />
              Account Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            {accountDetails.map((detail) => (
              <div key={detail.label} className="rounded-lg border border-[#00FF00]/20 bg-[#0A0A0A] p-4">
                <p className="text-xs uppercase tracking-wide text-[#00FF00]/70">{detail.label}</p>
                <p className="mt-2 font-medium text-white">{detail.value}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-black border border-[#00FF00]/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Lock className="h-5 w-5 text-[#00FF00]" />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="flex items-start gap-3 rounded-lg border border-[#00FF00]/20 bg-[#0A0A0A] p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00FF00]" />
              <div>
                <p className="font-medium text-white">Two-factor authentication</p>
                <p className="text-[#00FF00]/70">Your account has extra sign-in protection.</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#00FF00]/20 bg-[#0A0A0A] p-4">
              <p className="font-medium text-white">Last login</p>
              <p className="mt-1 text-[#00FF00]/70">Today from Addis Ababa, Ethiopia</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-black border border-[#00FF00]/30">
        <CardHeader>
          <CardTitle className="text-white">Preferences</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {preferences.map((preference) => {
            const Icon = preference.icon

            return (
              <div key={preference.title} className="rounded-lg border border-[#00FF00]/20 bg-[#0A0A0A] p-4">
                <Icon className="h-5 w-5 text-[#00FF00]" />
                <h3 className="mt-4 font-semibold text-white">{preference.title}</h3>
                <p className="mt-2 text-sm text-[#00FF00]/70">{preference.description}</p>
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
