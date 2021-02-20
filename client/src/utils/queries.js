import gql from 'graphql-tag'

export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        sets {
            _id
            setName
            card {
                _id
                question
                answer
            }
        }
    }
}
`