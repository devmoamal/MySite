import { cn } from "@/lib/utils";
import Text from "@/components/common/Text";
import { Heart } from "lucide-react";

type FooterProps = {
  className?: string;
};

function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "absolute bottom-0 items-center justify-center w-full text-center",
        className
      )}
    >
      {/* Bottom text */}
      <Text
        className="text-text flex justify-center items-center gap-x-1"
        size="xs"
      >
        BUILT WITH
        <span>
          <Heart size={16} fill="currentColor" fillOpacity={0.2} />
        </span>
        BY MOAMAL HUSSIN
      </Text>
    </footer>
  );
}

export default Footer;
