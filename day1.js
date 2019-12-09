// Fuel required to launch a given module is based on its mass.
// Specifically, to find the fuel required for a module, take its mass,
// divide by three, round down, and subtract 2.

// For example:

// For a mass of 12, divide by 3 and round down to get 4, then 
// subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4, so the 
// fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.
// The Fuel Counter-Upper needs to know the total fuel requirement. To find 
// it, individually calculate the fuel needed for the mass of each module 
// (your puzzle input), then add together all the fuel values.

// What is the sum of the fuel requirements for all of the modules on your 
// spacecraft?

const modules = [
  53247, 140268, 139961, 87816, 102986, 122415, 140484, 56099, 52832, 56999,
  122823, 130608, 83149, 144224, 104559, 108523, 126571, 137284, 83197, 109996,
  56795, 73112, 50043, 130097, 113563, 91200, 130589, 83725, 108625, 131977,
  95213, 149800, 70756, 86240, 134854, 148919, 114460, 95062, 122989, 57274,
  112074, 139530, 131217, 55652, 125522, 77304, 144873, 86811, 107768, 70704,
  146300, 87256, 118752, 52585, 126269, 124559, 52592, 112097, 123090, 101778,
  136424, 74547, 119337, 143570, 113426, 146458, 88135, 100236, 148224, 98718,
  135181, 56608, 109671, 144027, 135192, 111620, 69411, 107957, 88448, 64972,
  63010, 100625, 96144, 61998, 59813, 124503, 64306, 73119, 77094, 136295,
  132224, 125713, 110137, 51478, 90272, 133506, 72218, 100082, 106377, 140290,
]

const fuelRequirement = mass => {
  return Math.floor(mass / 3) - 2
}

const totalRequirement = modules => {
  return modules.reduce(((acc, curr) => {
    return acc + fuelRequirement(curr)
  }), 0)
}

console.log(totalRequirement(modules))
