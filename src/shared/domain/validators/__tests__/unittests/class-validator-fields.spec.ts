import { ClassValidatorFields } from '../../class-validator-fields'
import * as classValidator from 'class-validator'

class StubClassValidatorFields extends ClassValidatorFields<{ field: string }> {
  describe
}

describe('ClassValidatorField unit tests', () => {
  it('Should init errors and validated data vars with null', () => {
    const sut = new StubClassValidatorFields()

    expect(sut.errors).toBeNull()
    expect(sut.validatedData).toBeNull()
  })

  it('Should validate with errors', () => {
    const spyValidateSync = jest.spyOn(classValidator, 'validateSync')
    spyValidateSync.mockReturnValue([
      { property: 'field', constraints: { isRequired: 'test error' } },
    ])

    const sut = new StubClassValidatorFields()

    expect(sut.validate({ data: null })).toBeFalsy()
    expect(spyValidateSync).toHaveBeenCalled()
    expect(sut.validatedData).toBeNull()
    expect(sut.errors).toStrictEqual({ field: ['test error'] })
  })
})
