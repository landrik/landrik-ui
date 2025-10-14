import React from 'react';
import Icon from '../Icon';

export interface RateProps {
  value: number;
  max?: number;
  color?: string;
}

/**
 * 
 */
export const Rate = ({value, max, color }: RateProps) => {
  const rating = new Array(max).fill(1, 0, value).fill(0, value, max);
  return (
    <div className="art-rate" style={{ color }}>
      {
        rating.map((num, index)=>{
          if(num === 1) return <Icon name='star' key={index} />
          return <Icon name="starhollow" key={index} />
        })
      }
    </div>
  );
}


Rate.defaultProps = {
  max: 5,
};