from flask_wtf import FlaskForm 
from wtforms import StringField, IntegerField, SelectField
from wtforms.validators import DataRequired, Email, NumberRange, AnyOf

year_min = 1900
year_max = 2100

class LuckyForm(FlaskForm):
    name = StringField('Name', validators = [DataRequired()])
    email = StringField('Email', validators = [DataRequired(), Email()])
    year = IntegerField('Birth Year', validators = [DataRequired(), NumberRange(min = year_min, max = year_max)])
    color = SelectField('Favorite Color', choices=[('red', 'Red'), ('green', 'Green'), ('orange', 'Orange'), ('blue', 'Blue')], validators = [DataRequired()])
    
    # Turn off CSRF
    class Meta:
        csrf = False
