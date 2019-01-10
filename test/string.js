describe('String', function() {
  describe('#endsWith()', function() {
    it('should return true if the string ends with the given string', function() {
      expect("foo".endsWith("oo")).to.equal(true)
    })

    it('should return true if the string ends with the given string', function() {
      expect("foobar".endsWith("bar")).to.equal(true)
    })

    it('should return false if the string does not end with the given string', function() {
      expect("foo".endsWith("bar")).to.equal(false)
    })

    context('with a position argument', function() {
      it('returns true if the postion argument lines up with the search string', function() {
        expect("foobar".endsWith("oo", 3)).to.equal(true)
      })

      it('returns false if the position argument does not line up with the search string', function() {
        expect("foobar".endsWith("ar", 3)).to.equal(false)
      })

      it('returns true if the postion argument lines up with the search string', function() {
        expect("fooobar".endsWith("oo", 4)).to.equal(true)
      })

      it('returns true if the postion argument lines up with the search string', function() {
        expect("ar".endsWith("r")).to.equal(true)
      })

      it('returns true if the postion argument lines up with the search string - single character', function() {
        expect("r".endsWith("r")).to.equal(true)
      })

      it('returns true if the postion argument lines up with the search string - empty string', function() {
        expect("r".endsWith("")).to.equal(true)
      })

      it('returns false if the position argument does not line up with the search string - empty string', function() {
        expect("".endsWith("r")).to.equal(false)
      })
    })
  })
})
