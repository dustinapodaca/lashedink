
import React from "react";
import { Carousel } from "flowbite-react";
import exerciseImageUrl from "../assets/img/image1.jpg";

// Define TypeScript interfaces for your metadata structure
interface BaseConfig {
  numSets: number;
  numReps: number;
  side: string;
  restDurationMs: number;
  setDurationMs: number;
  holdDurationMs?: number;
}

interface ExerciseBlueprint {
  baseConfig: BaseConfig;
  exerciseId: string;
}

interface Instructions {
  setup: string[];
  movement: string[];
  tips: string[];
}

interface ExerciseDetails {
  instructions: Instructions;
  deviceSetupPosition: string;
  exerciseEquipment: string[];
}

interface ExerciseMetadata {
  exerciseBlueprint: ExerciseBlueprint;
  exerciseDetails: ExerciseDetails;
  friendlyExerciseName: string;
}

interface ExerciseCarouselProps {
  metadata: ExerciseMetadata[];
}

const ExerciseCarousel: React.FC<ExerciseCarouselProps> = ({ metadata }) => {
  return (
    <div className="h-full w-full">
      <Carousel slideInterval={10000}>
        {" "}
        {/* Slide interval set to 10 seconds (10000 ms) */}
        {metadata.map((exercise) => (
          <div
            key={exercise.exerciseBlueprint.exerciseId}
            className="flex flex-row items-center justify-center p-4"
          >
            <img
              src={exerciseImageUrl} // This assumes the same image for all exercises; update logic if images are specific to each exercise
              alt={exercise.friendlyExerciseName}
              className="w-1/2 h-auto object-cover" // Adjust your image size as necessary
            />
            <div className="w-1/2 ml-4">
              <h2 className="text-2xl font-bold">
                {exercise.friendlyExerciseName}
              </h2>
              <p>
                {exercise.exerciseBlueprint.baseConfig.numReps} Reps x{" "}
                {exercise.exerciseBlueprint.baseConfig.numSets} Sets
                {exercise.exerciseBlueprint.baseConfig.holdDurationMs &&
                  ` x ${
                    exercise.exerciseBlueprint.baseConfig.holdDurationMs / 1000
                  }s Hold`}
              </p>
              <div className="mt-2">
                <h3 className="font-semibold">Setup</h3>
                {exercise.exerciseDetails.instructions.setup.map(
                  (step, index) => (
                    <p key={index}>{step}</p>
                  )
                )}
              </div>
              <div className="mt-2">
                <h3 className="font-semibold">Movement</h3>
                {exercise.exerciseDetails.instructions.movement.map(
                  (step, index) => (
                    <p key={index}>{step}</p>
                  )
                )}
              </div>
              <div className="mt-2">
                <h3 className="font-semibold">Tips</h3>
                {exercise.exerciseDetails.instructions.tips.map(
                  (tip, index) => (
                    <p key={index}>{tip}</p>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ExerciseCarousel;



