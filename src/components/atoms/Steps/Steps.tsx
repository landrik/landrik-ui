import React from 'react';
import { StepsProps, StepStatus } from './Steps.types';
import {
StepsContainer,
StepItem,
StepIconWrapper,
StepIcon,
StepLine,
StepContent,
StepTitle,
StepDescription,
} from './Steps.styled';

const CheckIcon = () => (
<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
</svg>
);

export const Steps: React.FC<StepsProps> = ({
current,
steps,
direction = 'horizontal',
onChange,
clickable = false,
}) => {
const getStepStatus = (index: number): StepStatus => {
if (index < current) return 'finish';
if (index === current) return 'process';
return 'wait';
};

const handleStepClick = (index: number) => {
if (clickable && onChange) {
onChange(index);
}
};

return (
<StepsContainer $direction={direction}>
{steps.map((step, index) => {
const status = getStepStatus(index);
const isLast = index === steps.length - 1;


    return (
      <StepItem
        key={index}
        $direction={direction}
        $isLast={isLast}
        $clickable={clickable}
        onClick={() => handleStepClick(index)}
      >
        <StepIconWrapper $direction={direction}>
          <StepIcon $status={status}>
            {step.icon ? (
              step.icon
            ) : status === 'finish' ? (
              <CheckIcon />
            ) : (
              index + 1
            )}
          </StepIcon>

          {!isLast && direction === 'horizontal' && (
            <StepLine $status={status} $direction={direction} />
          )}
        </StepIconWrapper>

        {direction === 'vertical' && !isLast && (
          <StepLine $status={status} $direction={direction} />
        )}

        <StepContent>
          <StepTitle $status={status}>{step.title}</StepTitle>
          {step.description && (
            <StepDescription>{step.description}</StepDescription>
          )}
        </StepContent>
      </StepItem>
    );
  })}
</StepsContainer>


);
};