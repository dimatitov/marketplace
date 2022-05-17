import { FC } from "react";
import { IconProps } from "Components/icons/types";

export const NotFoundIcon: FC<IconProps> = ({ fill }) => {
  return (
    <svg width="204" height="60" viewBox="0 0 204 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 0V24H48V0H60V60H48V36H0V0H12ZM72 60V0H132V60H72ZM120 48V12H84V48H120ZM156 0V24H192V0H204V60H192V36H144V0H156Z"
        fill={fill}
      />
    </svg>
  );
};

NotFoundIcon.defaultProps = {
  fill: "var(--white)",
};
