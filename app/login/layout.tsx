import type React from "react"
import { WalletProviderWrapper } from "@/providers/wallet-provider"
import { VendorLayoutContent } from "@/components/vendor-layout-content"

export default function VendorLayout({ children }: { children: React.ReactNode }) {
  return (
    <WalletProviderWrapper>
      <VendorLayoutContent>{children}</VendorLayoutContent>
    </WalletProviderWrapper>
  )
}