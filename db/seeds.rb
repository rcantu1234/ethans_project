# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


batteryterminals = Welcome.create!({
                image: "batteryterminals.jpg",
                title: "DISCONNECTING AND RECONNECTING YOUR BATTERY",
                description: "If you're going to do any work on your car involving the electrical system, disconnect the battery first.
                To do this, loosen the connector for the negative/ground terminal first, and wiggle the terminal cap off.
                Use a wire-tie or similar to tie the cable back out of the way.
                If you need to take the battery out, you can now take off the positive connector.
                Why negative then positive? If you disconnect the positive side of the battery first, the negative side is still connected to the entire car.
                If you drop a tool and it lands on the positive battery terminal and touches anything else on the car, you'll have an electrical short.
                By disconnecting the negative first, you're cutting off the return path for the current.
                Now, if a tool drops on to either of the battery terminals, it doesn't matter if it touches part of the chassis or not - there's no continuous path for the electrical current.
                Reconnecting your battery.
                Connect the positive terminal first, and the negative second - the reverse of removal, and for the same reasons.
                When you slip the negative connector on, there will be a spark as it gets close and makes contact with the negative battery terminal.
                Don't be afraid of this - it's nothing to worry about.
                Make sure the terminal caps are done up nice and tight."
    })

batterywarning = Maintenance.create!({
                image: "batterywarning.gif",
                title: "THE ELECTRICAL FAULT LIGHT.",
                description: "This warning light is different in every car but normally it looks like a picture of a battery, similar to the picture on the left here.
                You'll see it come on and go off when you start your engine as part of the car's self-test, but if this light comes on and stays on,
                it means the electrical charging system is no longer working properly.
                Think of it like a cellphone battery. If the cellphone is plugged into the charger, you can use it indefinitely,
                but when you disconnect it from the charger, there's a limited amount of time before your battery runs out.
                It's exactly the same in your car, only bigger.
                Every car has an alternator - the charger - and a 12v battery used to supply power to the electrical system.
                If the alternator becomes faulty or the drive belt to it snaps, then it will not be able to do its job.
                The longer you drive, the more your car will use up the remaining juice in the battery and eventually the
                engine will die. This almost always requires a new or refurbished alternator."
    })

brakewarning1 = Maintenance.create!({
                image: "brakewarning1.jpg",
                title: "BRAKE WARNING LIGHT 1",
                description: "Most cars nowadays have a brake warning light on the dash.
                Its purpose is to alert you that something is wrong in the braking system somewhere.
                If it comes on, check your owner's manual to find out its meaning.
                The brake warning light doesn't have a standard meaning; it could be used for multiple purposes.
                For example, the same light may be used to show that the hand brake (parking brake for the Americans amongst you) is on.
                If that's the case and you're driving, you ought to have noticed the smell of burning brake dust by now.
                The light can also indicate that the fluid in the master cylinder is low.
                Each manufacturer has a different use and standard for this light.
                Which is nice. Because it would be such a drag if the same indicator meant the same thing in every vehicle."
    })

brakewarning2 = Maintenance.create!({
                image: "brakewarning2.jpg",
                title: "BRAKE WARNING LIGHT 2",
                description: "If you've got an ABS-equipped car, you also have a second light - the ABS light.
                If it comes on, get it seen to as soon as possible.
                It means the ABS computer has diagnosed that something is amiss in the system.
                It could be something as simple as dirt in one of the sensors, or something as costly as an entire ABS unit replacement.
                Either way, if that light is on, then you, my friend, have got 1970's brakes.
                It's important to note that this light normally comes on when you start the car and then switches off a few seconds later.
                If it blinks, throbs, flashes or in any other way draws your attention to itself, then take note.
                It's not doing that just to please itself. Compared to a steady light, a blinking ABS light normally indicates something more serious.
                In some cases it could be as bad as 'you have no brakes at all.'"
    })
