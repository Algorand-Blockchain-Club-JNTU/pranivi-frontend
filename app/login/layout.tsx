import type { ReactNode } from "react"
import { WalletProviderWrapper } from "@/providers/wallet-provider"
import { VendorLayoutContent } from "@/components/vendor-layout-content"

interface VendorLayoutProps {
  children: ReactNode
}

export default function VendorLayout({ children }: VendorLayoutProps) {
  return (
    <WalletProviderWrapper>
      <VendorLayoutContent>{children}</VendorLayoutContent>
    </WalletProviderWrapper>
  )
}
