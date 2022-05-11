import styled from "@emotion/styled";

const GlitchText = ({
  children,
  className = "",
  translateValue = 4,
  style,
}) => {
  const Text = styled.p`
    &::after {
      left: ${translateValue}px;
      top: -${translateValue}px;
    }
    &::before {
      left: -${translateValue}px;
      top: ${translateValue}px;
    }
  `;

  return (
    <div className={`difference-texts ${className}`} style={style}>
      <Text className="psecond p-relative" data-text={children}>
        {children}
      </Text>
    </div>
  );
};

export default GlitchText;
