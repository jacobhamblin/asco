# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150414070220) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "followings", force: :cascade do |t|
    t.integer  "recipient_id", null: false
    t.integer  "issuer_id",    null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "followings", ["issuer_id"], name: "index_followings_on_issuer_id", using: :btree
  add_index "followings", ["recipient_id"], name: "index_followings_on_recipient_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.integer  "owner_id",                    null: false
    t.boolean  "curated",     default: false
    t.string   "url",                         null: false
    t.text     "description"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  add_index "images", ["owner_id"], name: "index_images_on_owner_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "image_id",   null: false
    t.integer  "tag_id",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "taggings", ["image_id"], name: "index_taggings_on_image_id", using: :btree
  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                                                                                      null: false
    t.string   "username"
    t.string   "password_digest",                                                                            null: false
    t.string   "session_token"
    t.string   "avatar",          default: "https://s3-us-west-1.amazonaws.com/asco-jkh/layout/defavie.jpg"
    t.string   "description"
    t.datetime "created_at",                                                                                 null: false
    t.datetime "updated_at",                                                                                 null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
