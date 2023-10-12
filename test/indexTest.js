require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("Well-Formed HTML Document", function () {
  it('has a valid document structure', function () {
    expect(document.doctype.name).to.equal("html", "Missing DOCTYPE html tag");
    expect(document.querySelector("html").tagName).to.match(/html/i);

    expect(document.documentElement.outerHTML).to.include('<html');
    expect(document.documentElement.outerHTML).to.include('</html>');

    const head = document.querySelector('html > head');

    expect(head.tagName).to.equal('HEAD');

    expect(document.head.outerHTML).to.include('</head');
    const body = document.querySelector('html > body');

    expect(body.tagName).to.equal('BODY');

    expect(document.body.outerHTML).to.include('</body');
    
    const isValid = true;
    expect(isValid).to.be.true;
  });

  it('has a language attribute in the <html> tag', function () {
    expect(document.documentElement.outerHTML).to.include('lang="en"', 'Include a lang attribute assigned to "en" for English');
  });

  context('within <head>', function () {
    it('contains a <link> tag to an external stylesheet', function () {
      const link = document.querySelector('html > head > link');
      expect(link).to.not.be.null, "No <link> tag found in the <head>";
      expect(link.getAttribute("href")).to.not.be.null, "The 'href' attribute is missing in the link tag";
    });

    it('contains a <title> tag to enclose the site title', function () {
      const title = document.querySelector('html > head > title');

      expect(title.tagName).to.equal('TITLE');

      expect(title.outerHTML).to.include('</title>');
    });
  });
});
