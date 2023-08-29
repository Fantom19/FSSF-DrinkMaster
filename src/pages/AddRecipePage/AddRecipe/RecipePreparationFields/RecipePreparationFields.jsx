import { Field } from "formik";
import PropTypes from "prop-types";
import css from "./RecipePreparationFields.module.scss";

export default function RecipePreparationFields({ name }) {
	return (
		<div>
			<h3 className={css.recipeText}>Recipe Preparation</h3>
			<Field
				as="textarea"
				className={css.textareaStyle}
				name={name}
				type="text"
				placeholder="Enter the recipe"
				rows="7"
			/>
		</div>
	);
}

RecipePreparationFields.propTypes = {
	name: PropTypes.string.isRequired,
};
