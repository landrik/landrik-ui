import React from 'react';

const SvgMock: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg data-testid="svg-mock" {...props} />
);

export default SvgMock;
export const ReactComponent = SvgMock;
