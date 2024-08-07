import { gql } from '@apollo/client';

export const GET_ATTESTATIONS = gql`
  query Attestations {
    attestations(take: 25, orderBy: { time: desc }) {
      id
      attester
      recipient
      refUID
      revocable
      revocationTime
      expirationTime
      data
    }
  }
`;
