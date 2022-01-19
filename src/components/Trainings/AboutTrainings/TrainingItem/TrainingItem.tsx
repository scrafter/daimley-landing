import React, { useState } from 'react';
import {
  TrainingItemStyled,
  Badge,
  ParapgraphWrapper,
  Table,
  Title,
  Paragraph,
  ReadMoreButton,
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
}

function TrainingItem({ item }: Props) {
  const { translate } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TrainingItemStyled>
      <Table>
        <tr>
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
          <td>
            <Button label={translate(`trainings.list.button`)} />
          </td>
        </tr>

        {isOpen && (
          <>
            <tr>
              <td>
                <Title>{translate(`trainings.list.target`)}</Title>
              </td>
              <td colSpan={2}>
                <ParapgraphWrapper>
                  {item.target.map((target, index) => (
                    <Paragraph key={`target-${index}`}>{target}</Paragraph>
                  ))}
                </ParapgraphWrapper>
              </td>
            </tr>

            <tr>
              <td>
                <Title>{translate(`trainings.list.receivers`)}</Title>
              </td>
              <td colSpan={2}>
                <ParapgraphWrapper>
                  {item.receivers.map((receiver, index) => (
                    <BulletItem text={receiver} key={`receiver-${index}`} />
                  ))}
                </ParapgraphWrapper>
              </td>
            </tr>

            <tr>
              <td>
                <Title>{translate(`trainings.list.structure`)}</Title>
              </td>

              <td colSpan={2}>
                <ParapgraphWrapper>
                  <Paragraph>{item.structure.description}</Paragraph>

                  <Paragraph>
                    {translate(`trainings.list.consistOf`, {
                      number: item.structure.modules.length,
                    })}
                  </Paragraph>

                  <BulletsList items={item.structure.modules} />

                  {item.structure.paragraphs.map((paragraph, index) => (
                    <Paragraph key={`structure-paragraph-${index}`}>
                      {paragraph}
                    </Paragraph>
                  ))}
                </ParapgraphWrapper>
              </td>
            </tr>

            <tr>
              <td>
                <Title>{translate(`trainings.list.effects`)}</Title>
              </td>
              <td colSpan={2}>
                <ParapgraphWrapper>
                  {item.effects.map((effect, index) => (
                    <Paragraph key={`effect-${index}`}>{effect}</Paragraph>
                  ))}
                </ParapgraphWrapper>
              </td>
            </tr>

            <tr className="last-row">
              <td />
              <td colSpan={2}>
                <Button label={translate(`trainings.list.button`)} />
              </td>
            </tr>
          </>
        )}
      </Table>
    </TrainingItemStyled>
  );
}

export default TrainingItem;
