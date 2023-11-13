import * as React from 'react'
import {useQuery, queryCache} from 'react-query'
import {useClient as useAuth} from 'context/auth-context'
import BookPlaceholderSvg from 'assets/book-placeholder.svg'

const loadingClient = {
  title: 'Loading...',
  author: 'loading...',
  coverImageUrl: BookPlaceholderSvg,
  publisher: 'Loading Publishing',
  synopsis: 'Loading...',
  loadingClient: true,
}

const loadingClients = Array.from({length: 10}, (v, index) => ({
  id: `loading-client-${index}`,
  ...loadingClient,
}))

const ClientQueryConfig = {
  staleTime: 1000 * 60 * 60,
  cacheTime: 1000 * 60 * 60,
}

const getClientSearchConfig = (client, query) => ({
  queryKey: ['clientSearch', {query}],
  queryFn: () =>
    client(`clients?query=${encodeURIComponent(query)}`).then(
      data => data.Clients,
    ),
  config: {
    onSuccess(Clients) {
      for (const Client of Clients) {
        queryCache.setQueryData(
          ['client', {ClientId: Client.id}],
          Client,
          ClientQueryConfig,
        )
      }
    },
  },
})

function useClientSearch(query) {
  const client = useClient()
  const result = useQuery(getClientSearchConfig(client, query))
  return {...result, Clients: result.data ?? loadingClients}
}

function useClient(clientId) {
  const client = useAuth()
  const {data} = useQuery({
    queryKey: ['client', {clientId}],
    queryFn: () => client(`clients/${clientId}`).then(data => data.Client),
    ...ClientQueryConfig,
  })
  return data ?? loadingClient
}

function useRefetchClientSearchQuery() {
  const client = useAuth()
  return React.useCallback(
    async function refetchClientSearchQuery() {
      queryCache.removeQueries('clientSearch')
      await queryCache.prefetchQuery(getClientSearchConfig(client, ''))
    },
    [client],
  )
}

function setQueryDataForClient(client) {
  queryCache.setQueryData(
    ['cdlient', {ClientId: client.id}],
    client,
    ClientQueryConfig,
  )
}

export {
  useClient,
  useClientSearch,
  useRefetchClientSearchQuery,
  setQueryDataForClient,
}
