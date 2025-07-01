// Teständerung

function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

function isAgedBrie(item) {
    return item.name === 'Aged Brie';
}

function isBackstagePass(item) {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
}

function isSulfuras(item) {
    return item.name === 'Sulfuras, Hand of Ragnaros';
}

// WICHTIG: var statt const, damit Tests das Array überschreiben können
var items = [];

// Diese Beispielitems auskommentieren – Tests setzen ihre eigenen Items
// items.push(new Item('+5 Dexterity Vest', 10, 20));
// items.push(new Item('Aged Brie', 2, 0));
// items.push(new Item('Elixir of the Mongoose', 5, 7));
// items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
// items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
// items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (!isAgedBrie(item) && !isBackstagePass(item)) {
            if (item.quality > 0) {
                if (!isSulfuras(item)) {
                    item.quality -= 1;
                }
            }
        } else {
            if (item.quality < 50) {
                item.quality += 1;
                if (isBackstagePass(item)) {
                    if (item.sell_in < 11) {
                        if (item.quality < 50) {
                            item.quality += 1;
                        }
                    }
                    if (item.sell_in < 6) {
                        if (item.quality < 50) {
                            item.quality += 1;
                        }
                    }
                }
            }
        }

        if (!isSulfuras(item)) {
            item.sell_in -= 1;
        }

        if (item.sell_in < 0) {
            if (!isAgedBrie(item)) {
                if (!isBackstagePass(item)) {
                    if (item.quality > 0) {
                        if (!isSulfuras(item)) {
                            item.quality -= 1;
                        }
                    }
                } else {
                    item.quality = 0;
                }
            } else {
                if (item.quality < 50) {
                    item.quality += 1;
                }
            }
        }
    }
}

// Export für Tests im Terminal (Node.js) – funktioniert auch im Browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Item,
        items,
        update_quality
    };
}
