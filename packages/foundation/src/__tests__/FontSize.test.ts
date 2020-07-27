import FontSize from '../FontSize'

test('snapshot of fontsizes', () => {
    expect(FontSize).toMatchSnapshot()
})
