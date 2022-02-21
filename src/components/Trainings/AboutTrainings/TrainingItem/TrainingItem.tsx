import React, { useState } from 'react';
import {
  TrainingItemStyled,
  Badge,
  ParapgraphWrapper,
  Table,
  Title,
  Paragraph,
  ReadMoreButton,
  TableRow,
} from '@/components/Trainings/AboutTrainings/TrainingItem/TrainingItem.styles';
import Button from '@/components/Shared/Button/Button';
import useTranslation from '@/useTranslation';
import BulletItem from '@/components/Shared/BulletItem/BulletItem';
import BulletsList from '@/components/Shared/BulletsList/BulletsList';

interface Props {
  item: {
    type: string;
    title: string;
    description: string[];
    target: string[];
    receivers: string[];
    structure: {
      description: string;
      modules: string[];
      paragraphs: string[];
    };
    effects: string[];
  };
  labels: string[];
}

function TrainingItem({ item, labels }: Props) {
  const { translate } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TrainingItemStyled>
      <Table>
        <TableRow>
          <td>
            <Badge>{item.type}</Badge>
            <Title>{item.title}</Title>
          </td>
          <td>
            <ParapgraphWrapper>
              {item.description.map((desc, index) => (
                <Paragraph key={`description-${index}`}>{desc}</Paragraph>
              ))}

              <ReadMoreButton onClick={() => setIsOpen(!isOpen)}>
                {translate(
                  `trainings.list.${isOpen ? `readLess` : `readMore`}`,
                )}
              </ReadMoreButton>
            </ParapgraphWrapper>
          </td>
          <td className="button-cell">
            <Button link="/form" label={translate(labels[0])} />
          </td>
        </TableRow>

        {isOpen && (
          <>
            <TableRow>
              <td>
                <Title>{translate(labels[1])}</Title>
              </td>
              <td colSpan={2}>
                <ParapgraphWrapper>
                  {item.target.map((target, index) => (
                    <Paragraph key={`target-${index}`}>{target}</Paragraph>
                  ))}
                </ParapgraphWrapper>
              </td>
            </TableRow>

            <TableRow>
              <td>
                <Title>{translate(labels[2])}</Title>
              </td>
              <td colSpan={2}>
                <ParapgraphWrapper>
                  {item.receivers.map((receiver, index) => (
                    <BulletItem
                      doNotTranslate
                      text={receiver}
                      key={`receiver-${index}`}
                    />
                  ))}
                </ParapgraphWrapper>
              </td>
            </TableRow>

            <TableRow>
              <td>
                <Title>{translate(labels[3])}</Title>
              </td>

              <td colSpan={2}>
                <ParapgraphWrapper>
                  <Paragraph>{item.structure.description}</Paragraph>

                  <Paragraph>
                    {translate(labels[4], {
                      number: item.structure.modules.length,
                    })}
                  </Paragraph>

                  <BulletsList doNotTranslate items={item.structure.modules} />

                  {item.structure.paragraphs.map((paragraph, index) => (
                    <Paragraph key={`structure-paragraph-${index}`}>
                      {paragraph}
                    </Paragraph>
                  ))}
                </ParapgraphWrapper>
              </td>
            </TableRow>

            <TableRow>
              <td>
                <Title>{translate(labels[5])}</Title>
              </td>
              <td colSpan={2}>
                <ParapgraphWrapper>
                  {item.effects.map((effect, index) => (
                    <Paragraph key={`effect-${index}`}>{effect}</Paragraph>
                  ))}
                </ParapgraphWrapper>
              </td>
            </TableRow>

            <TableRow className="last-row">
              <td />
              <td colSpan={2}>
                <Button link="/form" label={translate(labels[0])} />
              </td>
            </TableRow>
          </>
        )}
      </Table>
    </TrainingItemStyled>
  );
}

export default TrainingItem;
