import { gql } from "@apollo/client";

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

export const GET_ATTESTATIONS_BY_WALLET_ID = gql`
  query Schemata($where: SchemaWhereInput) {
    schemata(where: $where) {
      schema
      index
      id
      _count {
        attestations
      }
      attestations {
        isOffchain
      }
    }
  }
`;

export const GET_ATTESTATION_BY_ID = gql`
  query GetAttestation($where: AttestationWhereUniqueInput!) {
    getAttestation(where: $where) {
      id
      data
      decodedDataJson
      recipient
      attester
      time
      timeCreated
      expirationTime
      revocationTime
      refUID
      revocable
      revoked
      txid
      schemaId
      schema {
        creator
        schema
        index
      }
      ipfsHash
      isOffchain
    }
  }
`;

// get schema by id used in schema details page

export const GET_SCHEMA_BY_ID = gql`
  query GetSchema($where: SchemaWhereUniqueInput!) {
    getSchema(where: $where) {
      id
      schema
      creator
      resolver
      revocable
      index
      txid
      time
      attestations {
        id
        data
        decodedDataJson
        recipient
        attester
        time
        timeCreated
        expirationTime
        revocationTime
        refUID
        revocable
        revoked
        txid
        schemaId
        ipfsHash
        isOffchain
        schema {
          id
          index
          creator
        }
      }
    }
  }
`;
