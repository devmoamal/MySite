import { cn } from "@/lib/utils";
import Text from "@/components/common/Text";
import Avatar from "@/components/common/Avatar";
import IconButton from "@/components/common/IconButton";
import { Github, Instagram, Send } from "lucide-react";

import MyAvatar from "@/assets/avatar.jpg";

type AboutProps = {
  className?: string;
};

function About({ className }: AboutProps) {
  return (
    <div className={cn("flex flex-col ", className)}>
      <Avatar size="md" src={MyAvatar} />
      <Text className="text-text" weight="bold">
        Moamal Hussin
      </Text>
      <Text className="text-text mb-4">Full Stack Developer</Text>

      <div className="flex gap-x-2">
        {/* Github */}
        <IconButton
          size={18}
          Icon={Github}
          onClick={() => window.open("https://github.com/devmoamal")}
        />

        {/* Instagram */}
        <IconButton
          size={18}
          Icon={Instagram}
          onClick={() => window.open("https://instagram.com/mqgx")}
        />

        {/* Telegram */}
        <IconButton
          size={18}
          Icon={Send}
          onClick={() => window.open("https://t.me/moamalhussin")}
        />
      </div>
    </div>
  );
}

export default About;
