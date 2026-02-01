import { HeaderLinks } from "./HeaderLinks";
import { HeaderProfile } from "./profile/HeaderProfile";
import { SearchField } from "./SearchField";

export function Shapka() {
  return <header className="p-layout border-b border-border flex items-center justify-between">
    <SearchField />
    <div className="flex items-center gap-8">
      <HeaderLinks />
      <HeaderProfile />
    </div>
  </header>
}