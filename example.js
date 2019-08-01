import { Selector } from 'testcafe';

const remoteRadioButton = Selector('#remote-testing');
const developerName = Selector('#submit-button');

fixture `Getting Started`// declare the fixture
    .page `https://devexpress.github.io/testcafe/example`;  // specify the start page


test('Enter various inputs', async t => {
    await t
        .typeText('#developer-name', 'Marcela Reyna')
        .click(remoteRadioButton)
        .click(developerName)

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, Marcela Reyna!');
});

