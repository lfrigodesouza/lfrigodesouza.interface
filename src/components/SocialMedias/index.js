import { Heading } from 'dracula-ui';
import React from 'react';
import {
  FaEnvelope, FaGithub, FaMastodon,
} from 'react-icons/fa';
import styled from 'styled-components';
import { FaBluesky, FaThreads } from 'react-icons/fa6';

class SocialMediaLink {
  constructor(icon, url, name, rel = 'noreferrer') {
    this.icon = icon;
    this.name = name;
    this.url = url;
    this.rel = rel;
  }
}
const socialMediaList = [
  new SocialMediaLink(<FaBluesky />, 'https://bsky.app/profile/lfrigodesouza.net', 'bluesky'),
  new SocialMediaLink(<FaMastodon />, 'https://techhub.social/@lfrigodesouza', 'mastodon', 'me'),
  new SocialMediaLink(<FaThreads />, 'https://www.threads.net/@lfrigodesouza', 'threads'),
  new SocialMediaLink(<FaGithub />, 'https://github.com/lfrigodesouza', 'github'),
  new SocialMediaLink(<FaEnvelope />, 'mailto:contato@lfrigodesouza.net', 'email'),
];
const SocialMediasButtons = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.font.jumbo};
  margin-top: ${({ theme }) => theme.margin.small};
`;

const SocialMediaButton = styled.a`
  color: var(--white);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  margin-left: 5px;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-top: ${({ theme }) => theme.margin.small};
  }
  &:hover {
    color: var(--blackTernary);
  }
`;

const Title = styled(Heading)`
  text-align: center;
`;

export default function SocialMedias() {
  return (
    <>
      <Title size="sm" color="yellowPink">
        Não deixe de conferir os artigos que escrevi no meu blog e me acompanhe nas redes sociais
      </Title>
      <br />
      <SocialMediasButtons>
        {socialMediaList.map((item) => (
          <SocialMediaButton href={item.url} target="_blank" rel={item.rel} key={item.name}>
            {item.icon}
          </SocialMediaButton>
        ))}
      </SocialMediasButtons>
    </>
  );
}
