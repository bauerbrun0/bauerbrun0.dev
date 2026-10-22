import type { Language } from "@utils/i18n.ts";

import { AnimatedTerminal, type TerminalIconHandle } from "@assets/icons/AnimatedTerminal.tsx";
import { useTranslations } from "@utils/i18n.ts";
import { useRef } from "react";

import { ProfilePicture } from "./ProfilePicture.tsx";

export function HeroProfile({ lang }: { lang: Language }) {
  const terminalIconRef = useRef<TerminalIconHandle>(null);
  const t = useTranslations(lang);

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: hover only triggers a decorative animation
    <div
      className="mt-8 flex w-fit flex-col md:mt-12"
      onMouseEnter={() => terminalIconRef.current?.startAnimation()}
      onMouseLeave={() => terminalIconRef.current?.stopAnimation()}
    >
      <ProfilePicture alt={t("hero.picture-alt")} />
      <div className="mt-4 flex items-center gap-2 font-medium md:gap-3">
        <span>{t("hero.name")}</span>
        <AnimatedTerminal ref={terminalIconRef} size={18} />
      </div>
      <span className="mt-1 font-light text-gray-600 dark:text-gray-400">{t("hero.job")}</span>
    </div>
  );
}
