import { IconDefinition as RegularIcon } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition as SolidIcon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { IconWrapper, StyledButton } from "./styled";

interface ButtonProps {
  onClick: () => void;
  label?: string;
  icon?: RegularIcon | SolidIcon;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ onClick, label, icon, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {icon && (
        <IconWrapper hasLabel={label != null}>
          <FontAwesomeIcon icon={icon} />
        </IconWrapper>
      )}
      {label && label}
    </StyledButton>
  );
};

export default Button;
