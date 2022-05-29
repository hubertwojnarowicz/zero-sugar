import styledComponents from 'styled-components';
import { CheckCircle } from 'react-feather';

export default function PhotographerInfo({ user, isVisible, i }) {
  const { profile_image, for_hire, first_name, last_name } = user;

  return (
    <PhotographerInfoWrapper
      style={{ display: isVisible === i ? 'flex' : 'none' }}
    >
      <ProfieImageWrapper>
        <ProfileImage src={profile_image.small} />
      </ProfieImageWrapper>
      <FirstAndLastNameWrapper>
        <FirstAndLastName>
          {first_name} {last_name}
        </FirstAndLastName>
        {for_hire === true ? (
          <HireWrapper>
            {' '}
            <Hire>Available for hire</Hire> <CheckCircle color="#ffffff" />{' '}
          </HireWrapper>
        ) : null}
      </FirstAndLastNameWrapper>
    </PhotographerInfoWrapper>
  );
}

const PhotographerInfoWrapper = styledComponents.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    align-items: center;
    gap: 8px;
`;

const ProfieImageWrapper = styledComponents.div`
    width: 36px;
`;

const ProfileImage = styledComponents.img`
    width: 100%;
    border-radius: 50%;
`;

const FirstAndLastNameWrapper = styledComponents.div`
    display: flex;
    flex-direction: column

`;

const FirstAndLastName = styledComponents.span`
    color: #ffffff;
    font-size: 0.875rem;
`;

const HireWrapper = styledComponents.div`
    display: flex;
    align-items: center;
    margin-top: -4px;
    gap: 4px;
`;

const Hire = styledComponents.span`
    font-size: 0.875rem;
    color: #ffffff;
`;
