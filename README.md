# Homecoming Algorithm POC

## NOTES <a name = "toc"></a>
- [What does *{...n}* do?](#extending_object)
- [What's with *random()* and *randomItem()*?](#random)
- [Holy changed RankedItem, Batman!](#batman)
- [What's with *required* in the RankedItem ctor()?](#required_ctor)

<hr />

<a name = "extending_object"></a>
## What Does {...m} do?

You'll see place in code now that looks like this:

```
new Meetup({
                timeslot: slots.randomItem(),
                instructor: instructors.randomItem(),
                ...m
            })
```

This is a shortcut that concatenates all the params into a new object.

Say you create a new blank object like so:
```
foo = {
    bar: 'bar',
    baz: 'baz
}
```
...and you have another object that you want to add to it...
```
bee = {
    bee: 'queen'
}
```
You can do this like so:
```
both = {
    bee,
    foo
}
```
...which gives you
```
{
    foo: {
        bar: 'bar',
        baz: 'baz
    },
    {
        bee: 'queen'
    }
}
```

But if you do it this way:

```
const both = {
    bee,
    ...foo
}
```

Then you get:
```
{
    foo: {
        bar: 'bar',
        baz: 'baz,
        bee: 'queen'
    }
}
```
Neat, huh?

[Back to top](#toc)
<hr/>

<a name = "random"></a>
## What's with *random()* and *randomItem()*?

These are extension methods added to `utils/index.js`. Generally speaking, this isn't good form, because it's extending a fundamental **JS Prototype object**, `Array`. This can easily make for nightmare code in large scale systems. It's a better idea to make a helper class and add your extension logic there instead.

But I like the clean syntax of extensions.
```
const myArray = [
    'Bob',
    'Tina',
    'Tom',
    'Abercrombie'
];

// extension method
const rand = myArray.random()

// helper method
const rand = random(myArray);
```

Plus, extension methods can be chained.

```
// clean
myArray.random().map(r => DoStuff(r));

// works, but ugly
random(myArray).map(r => DoStuff(r));
```

If you want to do it the right way, you would create an Extension Class.

```
class ExtendedArray extends Array {
    random() {
        // do some stuff with this
        return this;
    }
}
```

That way if the **Protype** gets modified in a minor version update, it's less likely to break your code. Downside is that you have convert all your `Arrays` into `ExtendedArrays`.

```
const extendedArray = new ExtendedArray(myArray);

extendedArray.random();
```

Pain in the ass. Just extend the **Prototype** and be mindful of core updates.

[Back to top](#toc)
<hr/>

<a name = "batman"></a>
## Holy changed RankedItem, Batman!

First of all, `PrimaryObject` was changed to `RankedItem`. The latter is just a more descriptive naming convention for what the class actually does, which is to provide `.ranking` as a property to all child classes.

<a name = "kvp"></a>
Secondly, the ctor() was updated with some craziness.
```
for (const [k, v] of Object.entries(args[0])) {
    this[k] = v; // where the value is assigned to the property
}
```
This supplants the need for constructors like this:
```
constructor(...args) {
    this._thing = args.thing;
    this._stuff = args.stuff;
    // [etc...]
}
``` 

What it does is iterate through all the key-value `entries` of args, grabs the enumerated `key`, then assigns that property to the enumerated `value`. One important thing to note is that there needs to be a setter of property `key` for this to work, because the setter is what assigned the `value` to the **private variable**. In other words, the reference.

```
this[k] = v;
// if k = color and v = 'blue'
// this is saying:
this.color = 'blue';

```
If there is a getter/setter:
```
set color(val) {
    this._color = val;
}
get color() {
    return this._color;
}
```
...then `this._color` will be set to ` 'blue' ` and will return properly when the getter is called. 

If there is no setter in this class, then `this.color` (note the lack of underscore) will return the **string** ` 'blue' `, not the **method()** `{ return this._color; }`.

This is the foundational importance of immutability. Preventing accidents where the intention of code is broken by the implementation of it.

[Back to top](#toc)
<hr />

<a name = "required_ctor"></a>
## What's with *required* in RankedItem ctor()? 

```
super({
    ...args,
    required:{
    meetups: [],
    preferences: []
    }
});
```

You've obviously already read the part about [extending objects](#extending_object) right? Good. So you know what `...args` does. So you know that `required` gets concatenated and passed to the `super` ctor(), which now has this:
```
if (args.required) {
    for (const [k, v] of Object.entries(args.required)) {
        this[k] = this[k] || v;
    }
}
```


You know what that does, because you've already read about [Enumerating KeyValue Pairs](#kvp). This is the same thing. By adding a `required` object in the child ctor(), the super iterates through `args.required`, if it's present in `args`, and assigns the property either to the current value, or the default value provided.

```
this[k] = this[k] || v;
```

Literally: *this **k** equals this **k** OR **v** .* If `this[k]` is already defined, it assigns itself to itself, essentially a moot call, but if `this[k]` is undefined, it will OR to `v`.

So given these arguments:
```
const test = new Bedtime({
    time: 'late'
});

class Bedtime {
    constructor(...args) {
        super({
            ...args,
            required: {
                time: now(),
                alarm: true
            }
        })
    }
}
```
What ends up getting passed to super() is 
```
{
    time: 'late',
    required: {
        time: Date.now(),
        alarm: true
    }
}
```
And when super() iterates through the arguments, it sets `this.time = 'late'`. Yay. 

Later it goes through `required` and enumerates to `time: '2020-01-27 1:00:00:00 AM'`.

But `this.time` is already set to *late*, so it just gets set to *late* again. When `required` enumerates to `alarm` however,(since `alarm` wasn't passed in `args`), it determines that `this.alarm` is *undefined*, and so it gets set to the value *true*.

Get it? Good.

Now lift the X-wing.

![Yoda](https://www.outerplaces.com/media/k2/items/cache/6d13258edc0e0de40f320e18fc68fa06_L.jpg)

[Back to top](#toc)
<hr />