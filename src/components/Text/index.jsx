import React from "react";

const sizeClasses = {
  txtDMSansBold20Bluegray900: "font-bold font-dmsans",
  txtDMSansBold25: "font-bold font-dmsans",
  txtDMSansBold32: "font-bold font-dmsans",
  txtSFProTextRegular14: "font-normal font-sfprotext",
  txtDMSansBold24: "font-bold font-dmsans",
  txtSFProTextRegular12: "font-normal font-sfprotext",
  txtDMSansBold25Gray900: "font-bold font-dmsans",
  txtJosefinSansSemiBold20: "font-josefinsans font-semibold",
  txtDMSansBold40: "font-bold font-dmsans",
  txtDMSansBold72: "font-bold font-dmsans",
  txtDMSansBold20Gray100: "font-bold font-dmsans",
  txtSFProTextSemibold16: "font-semibold font-sfprotext",
  txtDMSansBold20: "font-bold font-dmsans",
  txtDMSansRegular16Gray600: "font-dmsans font-normal",
  txtDMSansBold3125: "font-bold font-dmsans",
  txtDMSansRegular16: "font-dmsans font-normal",
  txtDMSansRegular16Gray100: "font-dmsans font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
