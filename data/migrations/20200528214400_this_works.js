exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('recipe_names', tbl => {
            tbl.increments()
            tbl.string('recipe_name').notNullable().unique()
        })
        .createTable('ingredients', tbl => {
            tbl.increments()
            tbl.string('ingredient_name').notNullable().unique()
        })
        .createTable('instructions', tbl => {
            tbl.integer('step')
            tbl.string('instruction')
            tbl.integer('recipe_id')
        // forces integer to be positive
                .unsigned()
                .notNullable()
                .references('id')
        // this table must exist already
                .inTable('recipe_names')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('recipes', tbl => {
            tbl.increments()
            tbl.integer('ingredients_id')
            // forces integer to be positive
                    .unsigned()
                    .notNullable()
                    .references('id')
            // this table must exist already
                    .inTable('ingredients')
            tbl.float('quantity')
            tbl.integer('recipe_id')
            // forces integer to be positive
                    .unsigned()
                    .notNullable()
                    .references('id')
            // this table must exist already
                    .inTable('recipe_names')
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_names')
};
