const book = require('../src/api/book.api')
const db = require('../src/config/db')

it('Should to execute query and return an empty array', () => {
    const spy = jest.spyOn(db, 'query')
        .mockReturnValue({
            error: null,
            rows: []
        })

    book.findAll()
    expect(spy).toHaveBeenCalled()
});