import { UserProps } from '../../user.entity'
import { UserEntity } from '../../user.entity'
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'

describe('UserEntity unit tests', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    props = UserDataBuilder({})
    sut = new UserEntity(props)
  })
  it('Constructor method', () => {
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('Getter of Name field', () => {
    expect(sut.props.name).toBeDefined()
    expect(sut.props.name).toEqual(props.name)
    expect(typeof sut.props.name).toBe('string')
  })

  it('Setter of Name field', () => {
    const name = 'some name'
    sut['name'] = name
    expect(sut.props.name).toEqual(name)
    expect(typeof sut.props.name).toBe('string')
  })

  it('Update Name field', () => {
    const name = 'some name'
    sut.updateName(name)
    expect(sut.props.name).toEqual(name)
  })

  it('Getter of Email field', () => {
    expect(sut.props.email).toBeDefined()
    expect(sut.props.email).toEqual(props.email)
    expect(typeof sut.props.email).toBe('string')
  })

  it('Getter of password field', () => {
    expect(sut.props.password).toBeDefined()
    expect(sut.props.password).toEqual(props.password)
    expect(typeof sut.props.password).toBe('string')
  })

  it('Setter of password field', () => {
    const pass = 'some password'
    sut['password'] = pass
    expect(sut.props.password).toEqual(pass)
    expect(typeof sut.props.password).toBe('string')
  })

  it('Update Password field', () => {
    const password = 'some password'
    sut.updatePassword(password)
    expect(sut.props.password).toEqual(password)
  })

  it('Getter of CreatedAt field', () => {
    expect(sut.props.createdAt).toBeDefined()
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })
})
