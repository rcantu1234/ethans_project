# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

goldletterA = Letter.create!({
                first_image: "Gold Letter A.jpg"
    })

batterywarning = Letter.create!({
                first_image: "batterywarning.gif"
})

batteryterminals = Letter.create!({
                first_image: "batteryterminals.jpg"
})

brakewarning1 = Letter.create!({
                first_image: "brakewarning1.jpg"
})

brakewarning2 = Letter.create!({
                first_image: "brakewarning2.jpg"
})

letterA = Letter.create!({
                first_image: "letter_a.gif"
})

starfall = Letter.create!({
                first_image: "StarfallABC.jpg"
})

letterB = Letter.create!({
                first_image: "letter_b.gif"
})

letterC = Letter.create!({
                first_image: "letter_c.gif"
})


letterD = Letter.create!({
                first_image: "letter_d.gif"
})

letterE = Letter.create!({
                first_image: "letter_e.gif"
})
