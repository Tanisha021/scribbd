import * as React from "react";
import { IconSend } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex border items-center p-2 ps-0 relative">
        <input
          type={type}
          className={cn(
            "flex h-8 w-full border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <IconSend />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
