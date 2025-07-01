describe("Gilded Rose", function () {

  it("reduces quality and sell_in for a normal item", function () {
    items = [ new Item("Elixir of the Mongoose", 5, 7) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(6);
  });

  it("increases quality for Aged Brie as it gets older", function () {
    items = [ new Item("Aged Brie", 2, 0) ];
    update_quality();
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(1);
  });

  it("increases quality by 1 when Backstage Pass has more than 10 days", function () {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(10);
    expect(items[0].quality).toEqual(21);
  });

  it("increases quality by 2 when Backstage Pass has 10 days or less", function () {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 25) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(27);
  });

  it("increases quality by 3 when Backstage Pass has 5 days or less", function () {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(33);
  });

  it("drops quality to 0 when Backstage Pass has expired", function () {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });


});
