describe('Array', function() {
  describe('#find()', function() {
    it('should return the first object for which the passed function returns true', function() {
      expect([1,2,3].find(function(item) { return item === 2 })).to.equal(2)
    })

    it('should return undefined if the function never returns true', function() {
      expect([1,2,3].find(function(item) { return false })).to.equal(undefined)
    })

    it('should return the first object for which the passed function returns true - negative number', function() {
      expect([1,2,-5,3].find(function(item) { return item === -5 })).to.equal(-5)
    })

    it('should return the first object for which the passed function returns true - zero', function() {
      expect([1,2,-5,3, 0].find(function(item) { return item === 0 })).to.equal(0)
    })
  })

  describe('#findIndex()', function() {
    it('should return the index of the first object for which the passed function returns true', function() {
      expect([50, 100, 150].findIndex(function(item) { return item === 100 })).to.equal(1)
    })

    it('should return the index of the first object for which the passed function returns true - negative number', function() {
      expect([-5, 50, 100, 150].findIndex(function(item) { return item === -5 })).to.equal(0)
    })

    it('should return the index of the first object for which the passed function returns true - zero', function() {
      expect([-5, 50, 100, 150, 0].findIndex(function(item) { return item === 0 })).to.equal(4)
    })

    it('should return -1 if the function never returns true', function() {
      expect([1,2,3].findIndex(function(item) { return false })).to.equal(-1)
    })
  })

  describe('#includes()', function() {
    it('should return true if the array includes the given value', function() {
      expect([1,2,3].includes(1)).to.equal(true)
    })

    it('should return false if the array does not include the given value', function() {
      expect([1,2,3].includes(100)).to.equal(false)
    })
  })
})
