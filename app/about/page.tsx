"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Zap, Shield } from "lucide-react"

const features = [
  { title: "Transparency", icon: CheckCircle, description: "Blockchain-verified transactions for full visibility" },
  { title: "Efficiency", icon: Zap, description: "Streamlined processes reducing time and costs" },
  { title: "Collaboration", icon: Users, description: "Seamless interaction between vendors and buyers" },
  { title: "Security", icon: Shield, description: "Advanced encryption and smart contract protection" },
]

// Reusable FeatureCard component
function FeatureCard({ title, icon: Icon, descriptio
