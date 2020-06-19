import React from 'react'

export const AccountContext = React.createContext()

export const AccountConsumer = AccountContext.Consumer

export default class AccountProvider extends React.Component {
  state = {
    username: 'Fooman',
    dateJoined: '6/19/2020',
    membershipLevel: 'Silver',
    updateAccount: (account) => this.updateAccount(account),
  }

  updateAccount = (account) => {
    this.setState({ ...account })
  }

  render() {
    return (
    <AccountContext.Provider value={this.state}>
      {this.props.children}
    </AccountContext.Provider>
    )
  }
}
