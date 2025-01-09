import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const PageWrapper = styled.div`
  margin-top: 2rem;
  @media (max-width: 1000px) {
    padding: 0 0.5rem;
  }
`;

const FooterBaseContainer = styled.footer`
  color: var(--global-text);
  padding: ${({ $isSub }) => ($isSub ? '0' : '0.5rem 0')};
  display: flex;
  justify-content: space-between;
  border-top: ${({ $isSub }) => ($isSub ? '0.125rem solid' : 'none')}
    var(--global-secondary-bg);
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: ${({ $isSub }) => ($isSub ? '0 0 1rem 0' : '0.5rem 0')};
  }

  @media (min-width: 601px) {
    flex-direction:row;
  }

  @media (max-width: 600px) {
    padding: '0.5rem 0';
  }
`;

const SocialIconsWrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const FooterLogoImage = styled.img`
  content: url('https://mlsamiet.xyz/_next/image?url=%2Fimages%2Flogo.png&w=96&q=75');
  max-width: 4rem;
  height: auto;
  @media (min-width: 600px) {
  min-width: 4rem;
  margin-bottom: -2rem;
}
`;

const Text = styled.div`
  color: grey;
  font-size: ${({ $isSub }) => ($isSub ? '0.75rem' : '0.65rem')};
  margin: ${({ $isSub }) => ($isSub ? '1rem 0 0 0' : '1rem 0')};
  max-width: 25rem;

  strong {
    color: var(--global-text);
  }
`;

const ShareButton = styled.a`
  display: inline-block;
  color: grey;
  transition: 0.2s ease-in-out;

  svg {
    font-size: 1.2rem;
  }

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.15);
    color: var(--global-button-text);
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

function getYear() {
  return new Date().getFullYear();
}

function NewFooter() {
  return (
    <PageWrapper>
      <footer className='mx-4 mb-4'>
        <FooterBaseContainer aria-label="Main Footer" $isSub={false}>
          <Text as="p" $isSub={false}>
            <FooterLogoImage alt="Footer Logo" className='max-w-4' /> <br />
          </Text>
        </FooterBaseContainer>
        <FooterBaseContainer aria-label="Sub Footer" $isSub={true}>
          <Text as="p" $isSub={true} className='text-start'>
            &copy; {getYear()}{' '}
            <a
              href="https://www.presence.devxoshakya.xyz"
              rel="noopener noreferrer"
              style={{ color: 'grey' }}
            >
              MLSA MIET
            </a>{' '}
            | Website Made by <strong><a href='https://adslabs.devxoshakya.xyz' rel='noopener noreferrer'>ADSLabs</a></strong>
          </Text>
          <nav aria-label="Social Links">
            <SocialIconsWrapper>
              {[
                {
                  href: 'https://instagram.com/mlsamiet',
                  Icon: FaInstagram,
                  label: 'Instagram',
                },
                {
                  href: 'https://x.com/mlsamiet',
                  Icon: FaTwitter,
                  label: 'Twitter',
                },
                {
                  href: 'https://github.com/mlsamiet',
                  Icon: FaGithub,
                  label: 'Github',
                },
              ].map(({ href, Icon, label }) => (
                <ShareButton
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label}`}
                >
                  <Icon aria-hidden="true" />
                </ShareButton>
              ))}
            </SocialIconsWrapper>
          </nav>
        </FooterBaseContainer>
      </footer>
    </PageWrapper>
  );
}

export default NewFooter;