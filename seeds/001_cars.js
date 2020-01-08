exports.seed = async function(knex) {
  await knex("cars").truncate();
  await knex("cars").insert([
    {
      VIN: 1290348374892,
      make: "honda",
      model: "fit",
      mileage: 1200,
      transmissionType: "automatic",
      titleStatus: "clean"
    },
    {
      VIN: 30984230958754,
      make: "volkswagen",
      model: "beetle",
      mileage: 300000,
      transmissionType: "manual",
      titleStatus: "salvage"
    },
    {
      VIN: 203948859494433,
      make: "toyota",
      model: "tacoma",
      mileage: 45000,
      transmissionType: "manual",
      titleStatus: "salvage"
    },
    {
      VIN: 75896498503943,
      make: "chevy",
      model: "volt",
      mileage: 2400,
      transmissionType: "automatic",
      titleStatus: "clean"
    }
  ]);
};
