import React from 'react';
import { BulletsListStyled } from '@/components/Shared/BulletsList/BulletsList.styles';
import BulletItem from '@/components/Shared/BulletItem/BulletItem';

interface Props {
  items: string[];
  doNotTranslate?: boolean;
}

function BulletsList({ items, doNotTranslate }: Props) {
  const size1 = Math.ceil(items.length / 2);
  const part1 = items.slice(0, size1);
  const part2 = items.slice(size1);

  return (
    <BulletsListStyled className="bullets-list">
      <div>
        {part1.map((item, index) => (
          <BulletItem
            doNotTranslate={doNotTranslate}
            text={item}
            key={`part-1-${index}`}
          />
        ))}
      </div>

      <div>
        {part2.map((item, index) => (
          <BulletItem
            doNotTranslate={doNotTranslate}
            text={item}
            key={`part-2-${index}`}
          />
        ))}
      </div>
    </BulletsListStyled>
  );
}

export default BulletsList;
